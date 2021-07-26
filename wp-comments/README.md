# Demo: `wp-comments`

[![Open in CodeSandbox](https://img.shields.io/badge/Open%20in-CodeSandbox-blue?style=flat-square&logo=codesandbox)](https://githubbox.com/frontity-demos/frontity-examples/tree/master/wp-comments)

This project is a demo to show how to use the `wp-comments` package to add WordPress comments to your Frontity project

Have a special look at the `src/components/comments/comments-form.js` to see how the React form interact with the Wordpress comments system through the actions and state properties provided by the `wp-comments` package

**`src/components/comments/comments-form.js`**

```js
import React from "react";
import { connect } from "frontity";
import Loading from "../loading";

const CommentsForm = ({ actions, state, postId }) => {
  const form = state.comments.forms[postId];
  return (
    <>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          actions.comments.submit(postId);
        }}
      >
        {/* If the form is submitting, we can show some kind of a loading state */}
        {form?.isSubmitting && <Loading />}
        <label>
          Content:
          <input
            name="content"
            onChange={(e) =>
              actions.comments.updateFields(postId, {
                content: e.target.value
              })
            }
            value={state.comments.forms[postId]?.fields?.content || ""}
          />
          {/* Show the errors for the individual fields.
            E.g. content of a comment cannot be empty and the email must be valid */}
          {form?.errors?.content}
        </label>

        <label>
          Name:
          <input
            name="author_name"
            onChange={(e) =>
              actions.comments.updateFields(postId, {
                authorName: e.target.value
              })
            }
            value={state.comments.forms[postId]?.fields?.authorName || ""}
          />
          {form?.errors?.authorName}
        </label>

        <label>
          Email:
          <input
            name="author_email"
            onChange={(e) =>
              actions.comments.updateFields(postId, {
                authorEmail: e.target.value
              })
            }
            value={state.comments.forms[postId]?.fields?.authorEmail || ""}
          />
          {form?.errors?.authorEmail}
        </label>

        {/* Show the REST API error messages.
            E.g. "Sorry, you must be logged in to comment." */}
        {form?.errorMessage && <div>ERROR: {form?.errorMessage}</div>}

        {/* If the form was submitted successfully we can show a confirmation */}
        <div>
          {form?.isSubmitted && "The comment was submitted successfully!"}
        </div>

        <input type="submit" />
      </form>
    </>
  );
};

export default connect(CommentsForm);
```

The component `src/components/comments/comments-list.js` shows how to display the comments available for a specific post

**`src/components/comments/comments-list.js`**

```js
import React from "react";
import { connect, styled } from "frontity";

const CommentsList = ({ state, libraries, postId }) => {
  const data = state.source.get(`@comments/${postId}`);
  const Html2React = libraries.html2react.Component;

  return (
    <>
      <Container>
        {data.items.map(({ id }) => {
          return (
            <>
              <Comment>
                <div>
                  {state.source.comment[id].author_name || "Anonymous"}:
                </div>
                <CommentContent>
                  <Html2React
                    html={state.source.comment[id].content.rendered}
                  />
                </CommentContent>
              </Comment>
            </>
          );
        })}
      </Container>
    </>
  );
};

export default connect(CommentsList);

...
```


### Install

```
npm install
```

### Run the app

```
npx frontity dev
```

Runs the app in development mode. Open http://localhost:3000 to view it in the browser.
