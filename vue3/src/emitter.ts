import mitt from "mitt"
import { FromItem } from "./components/form/types"

export type Events = {
  validate: undefined,
  addFormItem: FromItem
}

export const emitter = mitt<Events>()