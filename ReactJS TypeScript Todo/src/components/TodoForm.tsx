import React, {FC, useState, useRef, ChangeEvent, KeyboardEvent} from "react";

interface TodoFormProps {
    onAdd(title: string): void
}

export const TodoForm: FC<TodoFormProps>= ({onAdd}) => {
    //const [title, setTitle] = useState<string>('');

    // const changeHandler = (event: ChangeEvent<HTMLInputElement>) => {
    //     setTitle(event.target.value);
    // }

    const ref = useRef<HTMLInputElement>(null);

    const keyPressHandler = (event: KeyboardEvent) => {
        if(event.key === 'Enter'){
            onAdd(ref.current!.value);
            ref.current!.value = '';
            // console.log(title)
            // setTitle('');
        }
    }

    return (
        <div className='input-field mt2'>
            <input
                //onChange={changeHandler}
                //value={title}
                ref={ref}
                type="text"
                id='title'
                placeholder='Enter worn name'
                onKeyPress={keyPressHandler}
            />
            <label htmlFor="title" className='active'>
                Enter worn name
            </label>
        </div>
    )
}
