import { useState } from 'react';
import { TextField } from "@material-ui/core";
import { makeStyles } from '@material-ui/core/styles';
import "./TextField.css";

// Изменение стандартных стилей TextField из MUI
const useStyles = makeStyles({
  root: {
    width: "100%",
    "& .MuiOutlinedInput-root": {
      padding: "8px 8px 8px 12px",
      fontSize: "16px",
      fontWeight: "400",
      lineHeight: "24px",
      color: "#949494",
      "& .MuiOutlinedInput-input": { padding: "0"},
      "& > fieldset": { padding: "8px 12px", borderRadius: "8px" },
      "&.Mui-filled": {
        color: "black",
        "& > fieldset": { borderColor: "#B2B2B2" },
      },
      "&.Mui-focused": {
        color: "black",
        "& > fieldset": { borderColor: "#148F2A" },
      },
      "&.Mui-error": {
        "&.Mui-focused": {
          color: "black",
          "& > fieldset": { borderColor: "#E31227" },
        },
      },
    },
  },
});

const TextFieldComponent = ({ label, helperText, limitedSymbols=false, ...props}) => {
// Для работы props limitedSymbols создаем начальное состояние и передаем в него данные из контролируемого input TextField
  const [inputState, SetInputState] = useState('Text');

  const handleChange = (e) => {
    SetInputState(e.target.value);
  }

  const classes = useStyles();
// Создание классов для нижнего label в зависимости от типа TextField
  let downLabelClasses = 'downLabel';
  if (props.error) {
    downLabelClasses += ' error';
  } else if (props.disabled) {
    downLabelClasses += ' disabled';
  }

  return (
    <div className='component'>
      {/*Проверка custom props label - в случае если пропс был передан отрисовываем элемент с нужными классами*/}
      {label && <p className={props.disabled ? 'upLabel disabled' : 'upLabel'}>{label}<span className='red'>*</span></p>}
        <TextField
          label={false}
          classes={{
          root: classes.root,
          }}
          value={inputState}
          onChange={handleChange}
          variant="outlined"
          inputProps={{ maxLength: 200 }}
          {...props}
        />
      <div className={downLabelClasses}>
        {/*Проверка передачи custom props helperText и limitedSymbols - при передаче значений отрисовываем элементы */}
        {helperText && <p className="helperText">{helperText}</p>}
        {limitedSymbols && <p className='counter'>{inputState.length}/200</p>}
      </div>
    </div>
  );
};

export default TextFieldComponent;
