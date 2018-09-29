<template>
	<div style="background-color: #EBEBEB;min-height:800px">
		<div style="width:100%;background-color: #636363; overflow: hidden">
			<span class="demonstration" style="float:left;padding-top:10px;color:white;margin-left:1%">
                网站首页
            </span>
			<span class="demonstration" style="float:left;padding:5px;color:white;margin-left:2%;width:15%">
                <el-input
                        placeholder="请输入"
                        icon="search"
                        v-model="searchCriteria"
                        :on-icon-click="handleIconClick">
                </el-input>
            </span>
			<span class="demonstration" style="float:right;padding-top:10px;margin-right:1%">
                <el-dropdown trigger="click">
                  <span class="el-dropdown-link" style="color:white">
                    admin<i class="el-icon-caret-bottom el-icon--right"></i>
                  </span>
			<el-dropdown-menu slot="dropdown">
				<el-dropdown-item>个人信息</el-dropdown-item>
				<el-dropdown-item>退出登录</el-dropdown-item>
			</el-dropdown-menu>
			</el-dropdown>
			</span>
		</div>

		<div style="margin-top:5px">
			<el-row :gutter="10">
				<el-col :xs="4" :sm="4" :md="4" :lg="4">
					<div>
						<el-menu default-active="1" class="el-menu-vertical-demo" style="min-height:800px" @select="handleSelect">

							<el-collapse v-model="activeNames">
								<el-collapse-item title="首页" index="1" name="1">
									<el-menu-item index="1"><i class="el-icon-message"></i>首页</el-menu-item>
								</el-collapse-item>
								<el-collapse-item title="数据管理" name="2">
									<el-menu-item index="2"><i class="el-icon-menu"></i>用户列表</el-menu-item>
									<el-menu-item index="2"><i class="el-icon-menu"></i>商家列表</el-menu-item>
									<el-menu-item index="2"><i class="el-icon-menu"></i>食品列表</el-menu-item>
									<el-menu-item index="2"><i class="el-icon-menu"></i>订单列表</el-menu-item>
									<el-menu-item index="2"><i class="el-icon-menu"></i>管理员列表</el-menu-item>
								</el-collapse-item>
								<el-collapse-item title="添加数据" name="3">
									<el-menu-item index="3"><i class="el-icon-setting"></i>添加店铺</el-menu-item>
									<el-menu-item index="3"><i class="el-icon-setting"></i>添加商品</el-menu-item>
								</el-collapse-item>
								<el-collapse-item title="图表" name="4">
									<el-menu-item index="4"><i class="el-icon-setting"></i>用户分布</el-menu-item>
								</el-collapse-item>
								<el-collapse-item title="编辑" name="5">
									<el-menu-item index="5"><i class="el-icon-setting"></i>文本编辑</el-menu-item>
								</el-collapse-item>
								<el-collapse-item title="设置" name="6">
									<el-menu-item index="6"><i class="el-icon-setting"></i>管理员设置</el-menu-item>
								</el-collapse-item>
								<el-collapse-item title="说明" name="7">
									<el-menu-item index="7"><i class="el-icon-setting"></i>说明</el-menu-item>
								</el-collapse-item>
							</el-collapse>
						</el-menu>

					</div>
				</el-col>
				<el-col :xs="20" :sm="20" :md="20" :lg="20">
					<div>
						<div style="border: 1px solid #A6A6A6; border-radius:6px; padding:5px; margin:2px; background-color: white">
							<el-breadcrumb separator="/">
								<el-breadcrumb-item v-for="item in breadcrumbItems">{{item}}</el-breadcrumb-item>
							</el-breadcrumb>
						</div>
					</div>

					<div style="margin-top:10px">
						<router-view></router-view>
					</div>
				</el-col>
			</el-row>
		</div>
	</div>
</template>
<script type="text/ecmascript-6">
	export default {
		data() {
			return {
				searchCriteria: '',
				breadcrumbItems: ['首页'],
				activeName: '1'
			}
		},

		methods: {
			handleIconClick(ev) {
				console.log(ev);
			},

			handleSelect(key, keyPath) {
				switch(key) {
					case '1':
						this.$router.push('/Page1');
						this.breadcrumbItems = ['首页']
						break;
					case '2':
						this.$router.push('/Page2')
						this.breadcrumbItems = ['数据管理']
						break;
					case '3':
						this.$router.push('/Page3')
						this.breadcrumbItems = ['添加数据']
						break;
				}
			},

		},
	}
</script>