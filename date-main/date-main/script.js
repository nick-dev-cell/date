let resultado = document.querySelector (".resultado")
setInterval(() => {
    let date = new Date()
    let horaAtual = date.getHours() /* 20 */
    let minutoAtual = date.getMinutes() /* 46 */
    let diaSemana = ["Dom", "Seg", "Ter", "Qua", "Qui", "Sex", "Sab"]
    let diaAtualSemana = diaSemana[date.getDay()] /* Ter */
    let diaAtualMes = date.getDate() /* 22 */
    let mesAno = ["Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"]
    let mesAtual = mesAno[date.getMonth()]

   innerHeight. = <div class="card">
   <div class="date">
       <h1>18:25</h1>
       <p>Ter,22 Abril</p>
   </div>
   <i class="fa-solid fa-moon"></i>
</div>
    


}, 1000);