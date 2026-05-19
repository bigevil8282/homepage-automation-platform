create table if not exists public.leads (
  id uuid primary key default gen_random_uuid(),
  created_at timestamptz not null default now(),
  name text not null,
  phone text not null,
  email text,
  interest text,
  source text,
  page_url text,
  generated_for text,
  user_agent text,
  status text not null default 'new'
);

alter table public.leads enable row level security;

drop policy if exists "Service role can manage leads" on public.leads;
create policy "Service role can manage leads"
on public.leads
for all
to service_role
using (true)
with check (true);

create index if not exists leads_created_at_idx on public.leads (created_at desc);
create index if not exists leads_status_idx on public.leads (status);
