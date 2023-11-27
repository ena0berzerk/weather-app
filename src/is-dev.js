export default function isDevWebpackMode() {
  if (process.env.NODE_ENV !== 'production') {
    console.log('Development mode');
  }
}
isDevWebpackMode();
