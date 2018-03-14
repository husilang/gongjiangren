export default function ({store,redirect, error}) {
  if (store.state.firmUser) {
    return redirect('/firm/center');
  }
}
