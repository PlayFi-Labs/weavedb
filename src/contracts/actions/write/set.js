import { isNil } from "ramda"
import { err, parse, mergeData } from "../../lib/utils"

export const set = async (state, action) => {
  let { _data, data, query, _signer, new_data, path } = await parse(
    state,
    action,
    "set"
  )
  _data = mergeData(_data, new_data, true)
  return { state }
}
