import { IoPersonRemoveSharp, IoPersonAddSharp } from "react-icons/io5";
import { BsSortNumericDown, BsSortNumericUp } from "react-icons/bs";
import {
  StyledUserButton,
  StyledList,
  StyledUserListContainer,
} from "./UsersStyles";

const Users = ({
  users,
  onRemoveUser,
  onAddUser,
  addUsers,
  filterUsersByAge,
  filter,
  setFilter,
}) => {
  return (
    <StyledUserListContainer>
      <StyledList>
        {addUsers.length !== 0 && <h4>Choose user you want to add to list.</h4>}
        {addUsers.map((user) => {
          return (
            <li key={user.id}>
              <div>
                Name: {user.name} {user.surname}
              </div>
              <div>Age: {user.age}</div>
              <StyledUserButton add onClick={() => onAddUser(user.id)}>
                <IoPersonAddSharp />
              </StyledUserButton>
            </li>
          );
        })}
      </StyledList>
      <StyledList>
        <h4>List of users:</h4>
        <StyledUserButton
          filtering
          onClick={() =>
            filterUsersByAge(
              filter === "up" ? setFilter("down") : setFilter("up")
            )
          }
        >
          {filter === "up" ? <BsSortNumericDown /> : <BsSortNumericUp />}
        </StyledUserButton>

        {users.map((user) => {
          return (
            <li key={user.id}>
              <div>
                Name: {user.name} {user.surname}
              </div>
              <div>Age: {user.age}</div>
              <StyledUserButton remove onClick={() => onRemoveUser(user.id)}>
                <IoPersonRemoveSharp />
              </StyledUserButton>
            </li>
          );
        })}
      </StyledList>
    </StyledUserListContainer>
  );
};
export default Users;
