import {useState, useEffect} from 'react';

const useForm = (callback,validate) =>{

    const [values, setValues] = useState({
      email: "",
      name2: "",
      telefone: ""
    });
    const [errors, setErrors] = useState({});
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleChange = event =>{
  
      const {name,value} = event.target;
  
      //console.log(event.target.name);
      //console.log(event.target.value);
  
      setValues(
        {
          ...values,
          [name]: value
      });
    };
  
    const handleSubmit = event =>{
      //Para somente proibir de dar submit se os campos do formulário estiverem vazios. Extra a validação
      if(!values.email || !/\S+@\S+\.\S+/.test(values.email) || !/^[0-9\b]+$/.test(values.telefone) 
          || values.telefone.length < 8 || !values.name2 || values.name2.length < 2 || !values.minionRadios 
          || document.getElementById('qtdInput').value == 0)
        event.preventDefault();
     
  
      setErrors(validate(values));
      setIsSubmitting(true);
     
    };

    useEffect(() => {
      if(Object.keys(errors).length === 0 && isSubmitting){
        callback();
      }
    }, [errors]);

    return{
        handleChange,
        handleSubmit,
        values,
        errors
    }


};

export default useForm;