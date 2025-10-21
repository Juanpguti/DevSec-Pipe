# DevSecOps CI/CD Pipeline – Aplicación Segura de Ejemplo

Pipeline con Build → Test → **SAST** (Semgrep) → **SCA** (npm audit + Trivy fs) → **Container Scan** (Trivy image) sobre una app Node.js.

## Ejecutar local
```bash
cd app && npm ci && npm test
cd .. && docker build -t demoapi:local .
docker run --rm -p 3000:3000 demoapi:local
# probar:
curl http://localhost:3000/health
