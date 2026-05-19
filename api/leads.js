const REQUIRED_FIELDS = ["name", "phone"];

function json(response, statusCode, body) {
  response.statusCode = statusCode;
  response.setHeader("Content-Type", "application/json; charset=utf-8");
  response.end(JSON.stringify(body));
}

function sanitize(value) {
  return String(value || "").trim().slice(0, 500);
}

module.exports = async function handler(request, response) {
  if (request.method !== "POST") {
    response.setHeader("Allow", "POST");
    return json(response, 405, { error: "method_not_allowed" });
  }

  const supabaseUrl = process.env.SUPABASE_URL;
  const serviceRoleKey = process.env.SUPABASE_SERVICE_ROLE_KEY;

  if (!supabaseUrl || !serviceRoleKey) {
    return json(response, 500, { error: "missing_supabase_environment" });
  }

  try {
    const body = typeof request.body === "string" ? JSON.parse(request.body) : request.body || {};
    const missing = REQUIRED_FIELDS.filter((field) => !sanitize(body[field]));

    if (missing.length) {
      return json(response, 400, { error: "missing_required_fields", fields: missing });
    }

    const lead = {
      name: sanitize(body.name),
      phone: sanitize(body.phone),
      email: sanitize(body.email),
      interest: sanitize(body.interest),
      source: sanitize(body.source),
      page_url: sanitize(body.page_url),
      generated_for: sanitize(body.generated_for),
      user_agent: sanitize(request.headers["user-agent"])
    };

    const supabaseResponse = await fetch(`${supabaseUrl.replace(/\/$/, "")}/rest/v1/leads`, {
      method: "POST",
      headers: {
        apikey: serviceRoleKey,
        Authorization: `Bearer ${serviceRoleKey}`,
        "Content-Type": "application/json",
        Prefer: "return=minimal"
      },
      body: JSON.stringify(lead)
    });

    if (!supabaseResponse.ok) {
      const detail = await supabaseResponse.text();
      return json(response, 502, { error: "supabase_insert_failed", detail });
    }

    return json(response, 201, { ok: true });
  } catch (error) {
    return json(response, 400, { error: "invalid_request" });
  }
};
