export default function validateLogin(values){
    let errors = {};
    
if(!values.email){
    errors.email = "Email é obrigatório";

}else if(!/\S+@\S+\.\S+/.test(values.email)){
    errors.email = "Email é obrigatório";
}

if (!values.name2) {
    errors.name2 = "Nome é obrigatório";
}else if(values.name2.length < 2)
    errors.name2 = "Digite seu nome";


const tel = parseInt(values.telefone.length);
if(!values.telefone){
    errors.telefone = "Telefone é obrigatório";

}else if(!/^[0-9\b]+$/.test(values.telefone) ){
    errors.telefone = "Somente números";
}else if(values.telefone.length < 8 || values.telefone.length > 11){
    errors.telefone = "Digite um telefone válido";
}

if(!values.minionRadios)
    errors.minionRadios = "Escolha uma miniatura";

if(document.getElementById('qtdInput').value == 0)
    errors.qtdInput = "Escolha quantos minions quer reservar";



    return errors;
}


