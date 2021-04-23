<template>
  <div class="table-template">
    <el-table
      :data="tableData"
      style="width: 100%;margin-bottom: 20px;"
      :header-cell-style="{background:'#e9e9e9'}"
    >
      <el-table-column
        v-for="(item, index) in labelProp"
        :key="index"
        :align="align"
        :label="item.label"
        :show-overflow-tooltip="true"
        :width="item.width"
      >
        <template slot-scope="scope">
          <slot :name="item.prop" :row="scope.row">
            <span v-if="scope.row[item.prop]">{{ scope.row[item.prop] }}</span>
            <span v-else>--</span>
          </slot>
        </template>
      </el-table-column>
    </el-table>
    <el-pagination
      background
      layout="total, sizes, prev, pager, next"
      :page-sizes="[5, 10, 15, 20, 50, 100, 200]"
      :page-size="pageSize"
      :current-page.sync="currentPage"
      :total="total"
      @current-change="pageCurrentChange($event)"
      @size-change="pageSizeChange($event)"
    />
  </div>
</template>

<script>
export default {
  name: 'SlotTable',
  props: {
    total: {
      type: Number,
      default: 0,
      required: true
    },
    page: {
      type: Number,
      default: 0,
      required: true
    },
    pageSize: {
      type: Number,
      default: 0,
      required: true
    },
    align: {
      type: String,
      default: 'center'
    },
    tableData: {
      type: Array,
      default: () => [ {} ]
    },
    /* 表头与后端参数 */
    /* tips: [{ label: '日期', prop: 'date' }] */
    labelProp: {
      type: Array,
      default: () => [ {} ]
    }
  },
  data() {
    return {
      currentPage: this.page
    }
  },
  methods: {
    pageCurrentChange(event) {
      this.$emit('pageChange', event)
    },
    pageSizeChange(event) {
      this.$emit('pageSizeChange', event)
    }
  }
}
</script>

<style scoped>
  .el-pagination {
    display: flex;
    justify-content: flex-end;
  }
</style>
