export default function ({store, redirect,error}) {
  if (!store.getters.clientUser) {
    return redirect('/client');
  }
}
