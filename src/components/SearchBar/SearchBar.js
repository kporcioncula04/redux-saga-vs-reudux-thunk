import React, { Component } from "react";
import { connect } from "react-redux";
import { getUserSuggestions } from "../../redux/reducer";

class SearchBar extends Component {
  handleSearchBarChange = evt => {
    this.props.updateText(evt.target.value);
  };
  render() {
    const { users, isError } = this.props;
    return (
      <div>
        <div className="wrap">
          <div className="search">
            <input
              type="text"
              class="searchTerm"
              placeholder="Who are you looking for?"
              onChange={this.handleSearchBarChange}
            />
          </div>
        </div>
        {isError ? (
          <p>Something went wrong. Try again</p>
        ) : (
          <ul>
            {users.map(user => (
              <li key={user.id}>
                <a
                  href={user.html_url}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {user.login}
                </a>
              </li>
            ))}
          </ul>
        )}
      </div>
    );
  }
}

const mapStateToProps = ({ searchBarText, users, isError }) => ({
  searchBarText,
  users,
  isError
});
const mapDispatchTOProps = dispatch => ({
  updateText: text => dispatch(getUserSuggestions(text))
});

export default connect(
  mapStateToProps,
  mapDispatchTOProps
)(SearchBar);
// <div class="wrap">
//    <div class="search">
//       <input type="text" class="searchTerm" placeholder="What are you looking for?">
//       <button type="submit" class="searchButton">
//         <i class="fa fa-search"></i>
//      </button>
//    </div>
// </div>
