import './App.css';
import TextFieldComponent from './components/TextField.js';

function App() {
  return (
    <div className="App">
      <p>Пример компонента без переданных props</p>
      <TextFieldComponent />
      <p>Пример компонента с переданными props</p>
      <TextFieldComponent
        label="Custom label"
        helperText="Custom helperText"
        limitedSymbols
      />
      <p>Пример "multiline" компонента</p>
      <TextFieldComponent
        label="LabelTest"
        helperText="Custom helperText with long description"
        limitedSymbols
        multiline
      />

      <p>Пример "error" компонента</p>
        <TextFieldComponent
          label="errorLabel"
          helperText="error HelperText"
          limitedSymbols
          error
        />
      <p>Пример "disabled" компонента</p>
        <TextFieldComponent
          label="disabled"
          helperText="disabled HelperText"
          limitedSymbols
          disabled
        />
    </div>
  );
}

export default App;
