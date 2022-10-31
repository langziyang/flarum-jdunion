import app from 'flarum/forum/app';
import addIndexPage from "./addIndexPage";
import addPostPage from "./addPostPage";

app.initializers.add('jinber_flarum-jdunion', () => {
  addIndexPage()
  addPostPage()
});
