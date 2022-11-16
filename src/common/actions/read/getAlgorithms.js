import { isNil } from "ramda"

export const getAlgorithms = async (state, action) => {
  if (isNil(state.auth.algorithms)) {
    state.auth.algorithms = ["secp256k1", "ed25519", "rsa256", "poseidon"]
  }
  return {
    result: state.auth.algorithms,
  }
}
