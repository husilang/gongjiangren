export default function ({store, error}) {
  if (!store.state.firmUser) {
    error({
      statusCode: 403
    })
  }
}
