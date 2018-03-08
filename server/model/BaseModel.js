/**
 * 操作数据库的基本方法
 */
module.exports = {

  /**
   * 单条查询
   * @params object schema对象
   * @params conditions 查询的条件 json格式
   * @params callback 回调结果函数
   */
  _findOne: (object, conditions, callback) => {
    return object.findOne(conditions).then(callback).catch(callback)
  },
    /**
     * 查询
     * @params object schema对象
     * @params conditions 查询的条件 json格式
     * @params fields 查询条件字段
     * @params callback 回调结果函数
     */
  _query: (object, conditions, callback) => {
    let options = conditions || []
    // 同步执行 等待结果
    return object.find(options).exec(callback)
  },
  /**
   * findIn查询
   * @params object schema对象
   * @params fields 查询条件字段
   * @params options 条件
   * @params select 查询字段
   * @params sort 排序条件
   * @params callback 回调结果函数
   */
  _findInMany: (object, options, fields, select, sort, callback) => {
    // 同步执行 等待结果
    // return object.find({uid: {$in: options}}).then(callback).catch(callback)
    return object.find().where(fields).in(options).select(select).sort(sort).then(callback).catch(callback)
  },
  /**
   * 插入
   * @params monModel schema对象
   * @params options 插入的数据
   * @params callback 回调结果函数
   */
  _insert: (monModel, callback) => {
    return monModel.save().then(callback).catch(callback)
  },
  /**
   * 更新数据
   * @params object schema对象
   * @params conditions 更新条件
   * @params options 更新的数据
   * @params callback 回调结果函数
   */
  _update: (object, conditions, options, callback) => {
    return object.update(conditions, {$set: options}).then(callback).catch(callback)
  }
}
