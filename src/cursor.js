DBQuery.prototype.reverse = function() {
  if (!this._query.query || _.isEmpty(this._query.query)) {
    this._query.query = {}
  }
  if (!this._query.orderby || _.isEmpty(this._query.orderby)) {
    this._query.orderby = {'$natural': 1}
  }
  for (var field in this._query.orderby) {
    this._query.orderby[field] = this._query.orderby[field] * -1
  }
  return this
}

DBQuery.prototype.last = DBQuery.prototype.tail =
  function(n) {
    return this.reverse().limit(n || 1)
  }

DBQuery.prototype.first = DBQuery.prototype.head =
  function(n) {
    return this.limit(n || 1)
  }

DBQuery.prototype.tojson = function() {
  return tojson(this.toArray())
}
