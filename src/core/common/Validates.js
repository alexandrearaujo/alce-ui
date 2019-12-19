export const validateObrigatorio = value => (value === undefined ||  value === null || value === ''  ? 'Campo obrigatório' : undefined);
    
export const validateEmail = value => (value && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value) ? 'E-mail inválido' : undefined);

