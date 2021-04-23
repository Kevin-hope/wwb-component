<template>
  <div class="test-slot-table">
    <SlotTable
      :total="tableObj.total"
      :page="tableObj.page"
      :pageSize="tableObj.pageSize"
      :tableData="tableObj.tableData"
      :labelProp="tableObj.labelProp"
      @pageChange="pageChange"
      @pageSizeChange="pageSizeChange"
    >
      <template #operating="{ row }">
        <el-button type="text">
          编辑
        </el-button>
        <el-button type="text">
          下架
        </el-button>
      </template>
    </SlotTable>
  </div>
</template>

<script>
import SlotTable from './index.vue'

export default {
  name: 'TestSlotTable',
  components: {
    SlotTable
  },
  data() {
    return {
      tableObj: {
        total: 50,
        page: 1,
        pageSize: 10,
        tableData: [
          {
            id: '9527',
            num: null,
            name: '沈阳一日游，故宫，鸟岛，方特，大帅府，黄寺广场，中街，太原街，谁玩谁倒霉！！！',
            people: undefined,
            phone: '18512462017',
            time: '2016-05-02',
            type: '待付款',
            money: '',
            operating: '操作'
          },
          {
            id: '9527',
            num: '9826541203414233541',
            name: '沈阳一日游，故宫，鸟岛，方特，大帅府，黄寺广场，中街，太原街，谁玩谁倒霉！！！',
            people: '张三，李四',
            phone: '18512462017',
            time: '2016-05-02',
            type: '待付款',
            money: '￥1223.00',
            operating: '操作'
          },
          {
            id: '9527',
            num: '9826541203414233541',
            name: '沈阳一日游，故宫，鸟岛，方特，大帅府，黄寺广场，中街，太原街，谁玩谁倒霉！！！',
            people: '张三，李四',
            phone: '18512462017',
            time: '2016-05-02',
            type: '待付款',
            money: '￥1223.00',
            operating: '操作'
          },
          {
            id: '9527',
            num: '9826541203414233541',
            name: '沈阳一日游，故宫，鸟岛，方特，大帅府，黄寺广场，中街，太原街，谁玩谁倒霉！！！',
            people: '张三，李四',
            phone: '18512462017',
            time: '2016-05-02',
            type: '待付款',
            money: '￥1223.00',
            operating: '操作'
          },
          {
            id: '9527',
            num: '9826541203414233541',
            name: '沈阳一日游，故宫，鸟岛，方特，大帅府，黄寺广场，中街，太原街，谁玩谁倒霉！！！',
            people: '张三，李四',
            phone: '18512462017',
            time: '2016-05-02',
            type: '待付款',
            money: '￥1223.00',
            operating: '操作'
          },
          {
            id: '9527',
            num: '9826541203414233541',
            name: '沈阳一日游，故宫，鸟岛，方特，大帅府，黄寺广场，中街，太原街，谁玩谁倒霉！！！',
            people: '张三，李四',
            phone: '18512462017',
            time: '2016-05-02',
            type: '待付款',
            money: '￥1223.00',
            operating: '操作'
          }
        ],
        labelProp: [
          { label: '商品ID', prop: 'id' },
          { label: '订单号', prop: 'num' },
          { label: '订单名称', prop: 'name' },
          { label: '参与人员', prop: 'people' },
          { label: '手机号码', prop: 'phone' },
          { label: '下单时间', prop: 'time' },
          { label: '订单状态', prop: 'type' },
          { label: '订单金额', prop: 'money' },
          { label: '操作', prop: 'operating', width: 250 }
        ]
      }
    }
  },
  methods: {
    /* Page 改变 */
    pageChange(event) {
      this.tableObj.page = event
    },
    /* PageSize 改变 */
    pageSizeChange(event) {
      this.tableObj.pageSize = event
    }
  }
}
</script>
