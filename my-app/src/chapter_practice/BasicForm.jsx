import { useForm, useFieldArray } from "react-hook-form"
import React, { useEffect } from "react";

function BasicForm(props) {
    const { register, handleSubmit, formState: { isSubmitSuccessful, errors}, watch, } = useForm({
        defaultValues: {
//        firstName: '',
//        lastName: '',
//        category: '',
//        checkbox: [],
//        radio: ''
        }
      });

    const watchShowRegNumber = watch("showRegNumber", false) // you can supply default value as second argument
    const watchShowReg = watch("showReg", false) // you can supply default value as second argument
    const watchAllFields = watch() // when pass nothing as argument, you are watching everything
    const watchFields = watch(["showRegNumber", "number"]) // you can also target specific fields by their names

    React.useEffect(() => {
        const subscription = watch((value, { name, type }) =>
        console.log(value, name, type));

        return () => subscription.unsubscribe()
    },[watch]);        
        
//   React.useEffect(() => {
//        console.log("touchedFields", formState.touchedFields);
//        console.log("submitCount", formState.submitCount);
//    },[formState]);     
        


    return (
        <form onSubmit={handleSubmit(console.log)}>
            <label>이름
                <input {...register("fullName", { required: true, minLength: 2 })} 
                placeholder="2글자 이상 입력해주세요" /> 
            </label>
            <br />
            <label>나이
                <input type="number" {...register("age", { valueAsNumber: true, min: 17, max: 80 })} 
                placeholder="Age: 18세 이상 가입 가능" /> 
            </label>
            <br />            

            <label>
                <input type="radio" {...register("showRegNumber")} value="A"/>개인사업자 
                {watchShowRegNumber && (
                    <input type="number" {...register("perBusinessRegNumber", { maxLength: 9})} 
                        placeholder="사업자등록번호를 입력해주세요" />
                    )}
            </label>
           
            <br />
            <select {...register("category")}>
                <option value="">Select...</option>
                <option value="A">Category A</option>
                <option value="B">Category B</option>
            </select>
          
            <input {...register("checkbox")} type="checkbox" value="A" />
            <input {...register("checkbox")} type="checkbox" value="B" />
            <input {...register("checkbox")} type="checkbox" value="C" />
          
            <input {...register("radio")} type="radio" value="A" />
            <input {...register("radio")} type="radio" value="B" />
            <input {...register("radio")} type="radio" value="C" />
    
           <input type="submit" />
        </form>
    );
}
  

export default BasicForm;