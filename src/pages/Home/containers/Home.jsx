import React from "react";
import { Button } from '@mui/material';
import NewBookButton from 'components/Button';
import List from '@mui/material/List';
import Popper from '@material-ui/core/Popper';
import Box from '@material-ui/core/Box';
import { Link } from "react-router-dom";
import { bindActionCreators } from "redux";
import importedBooksActions from "../actions/books";
import { connect } from "react-redux";

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      bookPopperAnchor: null,
      bookPopperItem: null,
      isMouseOverPopper: false,
      bookId: 0,
    };
  }

  componentDidMount() {
    this.props.actionFetchBooks();
  }

  componentDidUpdate(prevProps) {
    if (this.props.list !== prevProps.list) {
      this.props.actionFetchBooks();
    }
  }

  render() {
    return (
      <div>
        <div>
          <NewBookButton/>
        </div>
        <div
          style={{
            display: 'flex',
          }}
        >
          {this.props.list.map((item) => (
            <div
              onMouseEnter={(event) => this.setState({
                bookPopperAnchor: event.currentTarget,
                bookPopperItem: item,
                bookId: item.id,
                isMouseOverPopper: true,
              })}
              onMouseLeave={() => {
                this.setState({
                  isMouseOverPopper: false,
                });
                setTimeout(() => {
                  if (!this.state.isMouseOverPopper) {
                    this.setState({
                      bookPopperAnchor: null,
                      bookPopperItem: null,
                      bookId: null,
                      isMouseOverPopper: false,
                    });
                  }

                }, 200);
              }}
            >
              <Button variant="outlined">
                <div>
                  <div>
                    <ol
                      style={{
                        color: 'black',
                        fontStyle: 'italic',
                        background: '#008080',
                        textAlign: 'center',
                        alignItems: 'center'
                      }}
                    >
                      {item.name}
                    </ol>
                  </div>
                  <div>
                    {'Author: ' + item.author}
                  </div>
                  <div>
                    {'Genre: ' + item.genre}
                  </div>
                  <div>
                    {'Price: ' + item.price}
                  </div>
                </div>
              </Button>
            </div>
          ))}
          <Popper
            anchorEl={this.state.bookPopperAnchor}
            open={this.state.bookPopperAnchor}
            onMouseEnter={() => this.setState({
              isMouseOverPopper: true,
            })}
            onMouseLeave={() => this.setState({
              isMouseOverPopper: false,
              bookPopperAnchor: null,
              bookPopperItem: null,
            })}
          >
            <Box
              sx={{
                border: 1,
                p: 1,
                bgcolor: '#008080'
              }}
            >
              <List
                style={{
                  display: 'flex',
                  flexDirection: 'column'
                }}
              >
                <Button
                  style={{
                    color: 'black',
                    fontStyle: 'italic'
                  }}
                  variant="outlined"
                >
                  <Link
                    to={{
                      pathname: `/editor/${this.state.bookId}`,
                    }}
                  >
                    EDIT
                  </Link>
                </Button>
                <Button
                  onClick={() => {
                    this.props.actionFetchDeleteBook({
                      id: this.state.bookId,
                    });
                    this.setState({
                      bookPopperAnchor: null,
                      bookPopperItem: null,
                    });
                  }

                  }
                  style={{
                    color: 'red',
                    fontStyle: 'italic'
                  }}
                  variant="outlined"
                >
                  DELETE
                </Button>
              </List>
            </Box>
          </Popper>
        </div>
      </div>
    );
  }
}

const mapReduxStateToProps = state => ({
  id: state.reducer.id,
  list: state.reducer.list,
  isFailedFetchBooks: state.reducer.isFailedFetchBooks,
  isFetchingBooks: state.reducer.isFetchingBooks,
});

const mapDispatchToProps = (dispatch) => {
  const {
    fetchBooks,
    fetchDeleteBook,
  } = bindActionCreators(importedBooksActions, dispatch);
  return {
    actionFetchBooks: fetchBooks,
    actionFetchDeleteBook: fetchDeleteBook,
  };
};

export default connect(mapReduxStateToProps, mapDispatchToProps)(Home);
