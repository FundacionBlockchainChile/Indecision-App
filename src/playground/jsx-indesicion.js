console.log("App.js is running");

const app = {
  title: "Indecision App",
  subTitle: "Put your life in the hands of a computer",
  options: [],
};

const removeAll = () => {
  app.options = [];
  render();
};

const makeDecision = () => {
  const randomNum = Math.floor(Math.random() * app.options.length);
  const option = app.options[randomNum];
  console.log(option);
};

const onFormSubmit = (e) => {
  e.preventDefault();
  const option = e.target.elements.option.value;
  if (option) {
    app.options.push(option);
    e.target.elements.option.value = "";
  }
  render();
};

const numbers = [55, 101, 1000];

const appRoot = document.getElementById("app");

const render = () => {
  // JSX - Javascript XML
  const template = (
    <div>
      <h1>{app.title}</h1>
      {app.subTitle && <p>{app.subTitle}</p>}
      <p>
        {app.options.length > 0
          ? `Here are your Options:  ${app.options.join(", ")}`
          : "No options"}
      </p>
      <button disabled={app.options.length === 0} onClick={makeDecision}>
        What should I Do?
      </button>
      <button onClick={removeAll}>Remove All</button>
      <ol>
        {app.options.map((option, index) => (
          <li key={index}>{option}</li>
        ))}
      </ol>
      <form onSubmit={onFormSubmit}>
        <input type="text" name="option"></input>
        <button>Add Option</button>
      </form>
    </div>
  );
  ReactDOM.render(template, appRoot);
};

render();
