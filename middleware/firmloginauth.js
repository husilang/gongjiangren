export default function ({store,redirect, error}) {
  console.log(store.getters.firmUser);
  if (store.getters.firmUser) {
    return redirect('/firm/center');
  }
}
