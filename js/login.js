'use strict'

const token = getCookie('token')

if(!token){
  $("#login-modal").modal("show")
}

$('#login-form').submit(()=>{
  const login = this.login.value
  const senha = this.senha.value
  $.post('logar',{ login, senha }, logou)
  return false
})

function logou(data){
  if(data.status){
    renovaToken(data.token)
    $("#login-modal").modal("hide")
  }
}