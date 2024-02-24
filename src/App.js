import './App.css';
import TextFieldComponent from './components/TextField.js';

function App() {
  return (
    <div className="App">
      <section>
        <p>Компонент без переданных props</p>
        <TextFieldComponent />
        <p>Компонент с переданными props</p>
        <TextFieldComponent
          label="Custom label"
          helperText="Custom helperText"
          limitedSymbols
        />
        <p>"Multiline" компонент</p>
        <TextFieldComponent
          label="LabelTest"
          helperText="Custom helperText with long description"
          limitedSymbols
          multiline
        />
        <p>"Error" компонент</p>
        <TextFieldComponent
          label="errorLabel"
          helperText="error HelperText"
          limitedSymbols
          error
        />
        <p>"Disabled" компонент</p>
        <TextFieldComponent
          label="disabled"
          helperText="disabled HelperText"
          limitedSymbols
          disabled
        />
      </section>
      <section>
        <p>"Outlined" компонент без переданных props</p>
        <TextFieldComponent variant="outlined" />
        <p>"Outlined" компонент с переданными props</p>
        <TextFieldComponent
          label="Custom label"
          helperText="Custom helperText"
          limitedSymbols
          variant="outlined"
        />
        <p>"Outlined multiline" компонент</p>
        <TextFieldComponent
          label="LabelTest"
          helperText="Custom helperText with long description"
          limitedSymbols
          multiline
          variant="outlined"
        />
        <p>"Outlined error" компонент</p>
        <TextFieldComponent
          label="errorLabel"
          helperText="error HelperText"
          limitedSymbols
          variant="outlined"
          error
        />
        <p>"Outlined disabled" компонент</p>
        <TextFieldComponent
          label="disabled"
          helperText="disabled HelperText"
          limitedSymbols
          variant="outlined"
          disabled
        />
      </section>
    </div>
  );
}

export default App;
