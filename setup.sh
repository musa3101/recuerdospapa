#!/bin/bash

# ==============================================================================
# Script de Setup Local - MYNEXT (Para papá Web)
# ==============================================================================

echo "🚀 Iniciando entorno de desarrollo para 'Para papá'..."

# 1. Asegurar rama dev
git checkout dev 2>/dev/null || git checkout -b dev

# 2. Instalar dependencias si no existen
if [ ! -d "web/node_modules" ]; then
  echo "📦 Instalando dependencias de Node..."
  cd web && npm install && cd ..
fi

# 3. Comprobar automatizaciones Keep-Alive para Supabase (si aplica en el futuro)
if [ -f "web/.env" ]; then
  if grep -q "VITE_SUPABASE_URL" "web/.env"; then
    echo "⚙️ Configurando automatizaciones Keep-Alive..."
    mkdir -p .github/workflows
    cat << 'EOF' > .github/workflows/keep-alive.yml
name: Supabase Keep Alive Ping
on:
  schedule:
    - cron: '0 5 * * 2,5' # Martes y viernes a las 05:00 UTC
  workflow_dispatch:

jobs:
  ping:
    runs-on: ubuntu-latest
    steps:
      - name: Ping Supabase Health Endpoint
        run: |
          curl -s -f "${{ secrets.VITE_SUPABASE_URL }}/auth/v1/health" || exit 0
EOF
  fi
fi

echo "✅ Entorno listo en rama dev."
echo "▶️ Para arrancar el servidor: cd web && npm run dev"
