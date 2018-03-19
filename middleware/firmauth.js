export default function ({store, redirect,error}) {
  if (!store.getters.firmUser) {
    return redirect('/firm/login');
  }
}
