import { useState } from "react";
import { StyledApp } from "./AppStyles";
import Form from "./components/form/Form";
import Users from "./components/users/Users";
import { usersList, addUsersList } from "./data/UsersList";
import { ThemeProvider } from "styled-components";
import { lightTheme, darkTheme } from "./components/toggleTheme/ToggleStyles";
import GlobalStyle from "./globalStyles/GlobalStyles";
import ThemeButton from "./components/toggleTheme/Toggle";

const App = () => {
  const [name, setName] = useState("");
  const [error, setError] = useState(false);
  const [users, setUsers] = useState(usersList);
  const [add, setAdd] = useState(addUsersList);
  const [filter, setFilter] = useState("down");

  let themeStoredInLocalStorage = localStorage.getItem("theme");
  const storeThemeInLocalStorage = (theme) => {
    localStorage.setItem("theme", theme);
  };
  const [theme, setTheme] = useState(
    themeStoredInLocalStorage ? themeStoredInLocalStorage : "light"
  );
  const toggleTheme = () => {
    if (theme === "light") {
      setTheme("dark");
      storeThemeInLocalStorage("dark");
    } else {
      setTheme("light");
      storeThemeInLocalStorage("light");
    }
  };

  const onFormSubmit = (event) => {
    if (name.trim() === "") {
      event.preventDefault();
      setError(true);
    } else {
      event.preventDefault();
      setError(false);
      alert(`Your name: ${name}`);
      setName("");
    }
  };
  const onAddUser = (id) => {
    const addUser = add.filter((user) => user.id === id);
    const usersLeft = add.filter((user) => user.id !== id);
    setUsers((prev) => [...prev, ...addUser]);
    setAdd(usersLeft);
  };
  const onRemoveUser = (id) => {
    const removeUser = users.filter((user) => user.id !== id);
    const removedUser = users.filter((user) => user.id === id);
    setAdd((prev) => [...prev, ...removedUser]);
    setUsers(removeUser);
  };
  const filterUsersByAge = () => {
    switch (filter) {
      case "up":
        const sortedUsersUp = users.sort((userA, userB) => {
          if (userA.age > userB.age) {
            return 1;
          } else if (userA.age < userB.age) {
            return -1;
          } else {
            return 0;
          }
        });
        setUsers([...sortedUsersUp]);
        break;
      case "down":
        const sortedUsersDown = users.sort((userA, userB) => {
          if (userA.age < userB.age) {
            return 1;
          } else if (userA.age > userB.age) {
            return -1;
          } else {
            return 0;
          }
        });
        setUsers([...sortedUsersDown]);
        break;
      default:
        break;
    }
  };
  return (
    <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
      <GlobalStyle />
      <StyledApp>
        <ThemeButton toggleTheme={toggleTheme} theme={theme} />
        <Form
          onFormSubmit={onFormSubmit}
          name={name}
          setName={setName}
          error={error}
        />
        <Users
          onRemoveUser={onRemoveUser}
          users={users}
          onAddUser={onAddUser}
          addUsers={add}
          filterUsersByAge={filterUsersByAge}
          filter={filter}
          setFilter={setFilter}
        />
      </StyledApp>
    </ThemeProvider>
  );
};

export default App;
