import useTheme from "@/hooks/useTheme";

const App = () => {
  const { theme, resolvedTheme, setTheme } = useTheme();

  return (
    <div>
      <h1>Theme: {theme}</h1>
      <h2>Resolved: {resolvedTheme}</h2>

      <button onClick={() => setTheme("light")}>Light</button>
      <button onClick={() => setTheme("dark")}>Dark</button>
      <button onClick={() => setTheme("system")}>System</button>
    </div>
  );
};

export default App;