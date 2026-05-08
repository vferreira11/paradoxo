$files = @("site\index.html", "site\diagnostico.html", "site\proposta-executiva.html", "site\proposta-terminal.html")

foreach ($file in $files) {
    if (Test-Path $file) {
        $content = Get-Content $file -Raw
        
        # Correcoes de acentuacao
        $content = $content -replace 'feita a mao', 'feita à mão'
        $content = $content -replace 'diagnostico', 'diagnóstico'
        $content = $content -replace 'Diagnostico', 'Diagnóstico'
        $content = $content -replace 'recomendacoes', 'recomendações'
        $content = $content -replace 'Recomendacoes', 'Recomendações'
        $content = $content -replace 'proprias', 'próprias'
        $content = $content -replace 'solucao', 'solução'
        $content = $content -replace 'Solucao', 'Solução'
        $content = $content -replace 'comeca', 'começa'
        $content = $content -replace 'decisoes', 'decisões'
        $content = $content -replace 'decisao', 'decisão'
        $content = $content -replace 'Decisao', 'Decisão'
        $content = $content -replace 'operacao', 'operação'
        $content = $content -replace 'Operacao', 'Operação'
        $content = $content -replace 'estrategicas', 'estratégicas'
        $content = $content -replace 'Estrategicas', 'Estratégicas'
        $content = $content -replace 'conclusao', 'conclusão'
        $content = $content -replace 'sao ', 'são '
        $content = $content -replace 'friccoes', 'fricções'
        $content = $content -replace 'restricoes', 'restrições'
        $content = $content -replace 'unica', 'única'
        $content = $content -replace 'implementacao', 'implementação'
        $content = $content -replace 'execucao', 'execução'
        $content = $content -replace 'Execucao', 'Execução'
        $content = $content -replace 'visao', 'visão'
        $content = $content -replace 'especifico', 'específico'
        $content = $content -replace 'logica', 'lógica'
        $content = $content -replace 'prioritarias', 'prioritárias'
        $content = $content -replace 'hipoteses', 'hipóteses'
        $content = $content -replace 'proximo', 'próximo'
        $content = $content -replace 'nao ', 'não '
        $content = $content -replace 'Não\s*vende', 'Não vende'
        $content = $content -replace 'negocio', 'negócio'
        $content = $content -replace 'Negocio', 'Negócio'
        $content = $content -replace 'Metodo', 'Método'
        $content = $content -replace 'metodo', 'método'
        $content = $content -replace 'Pagina', 'Página'
        $content = $content -replace 'opcaoo', 'opção'
        $content = $content -replace 'Gestao', 'Gestão'
        $content = $content -replace 'gestao', 'gestão'
        $content = $content -replace 'tecnologica', 'tecnológica'
        
        Set-Content -Path $file -Value $content -Encoding UTF8
    }
}
