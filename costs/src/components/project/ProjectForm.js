import Input from '../form/Input';
import Select from '../form/Select';
import SubmitButton from '../form/SubmitButton';
import styles from './ProjectForm.module.css';

function ProjectForm(  {btnText} ) {
    return(
        <form className={styles.form}>
            {/* <div>
                <input type="text" placeholder="Insira o nome do projeto"/>
            </div> */}
            <Input 
                type="text" 
                text="Nome do projeto"
                name="name"
                placeholder="Insira o nome do projeto"
            />
            <Input 
                type="number" 
                text="Orçamento"
                name="budget"
                placeholder="Insira o orçamento total"
            />

            <Select
                text="Selecione uma categoria"
                name="category_id"
                options
                handOnChange
                value
            />

            <SubmitButton 
                text={btnText}
            />


        </form>
    )
}

export default ProjectForm;