import {ValueState} from "../state/State"
import {Accessor} from "./Accessor"
import {SimpleQueryString} from "../query/QueryBuilders";

export class PaginationAccessor extends Accessor<ValueState> {
  state = new ValueState()

  buildOwnQuery(query){
    let from = (query.query.size || 20) * Number(this.state.getValue()) - 1
    return query.setFrom(from)
  }
}
