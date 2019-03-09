<!DOCTYPE html>
<html>
  <head>
    <meta charset="UTF-8" />
    <!-- Put the CSS code here -->
    <style>
      #app {
        background-color: yellow;
        padding: 10px;
      }
      #parent {
        background-color: green;
        width: 400px;
        height: 300px;
        position: relative;
        padding-left: 5px;
      }
      h1 {
        margin-top: 0;
      }
      .child {
        width: 150px;
        height: 150px;
        position: absolute;
        top: 60px;
        padding: 0 5px 5px;
      }
      .childA {
        background-color: red;
        left: 20px;
      }
      .childB {
        background-color: blue;
        left: 190px;
      }
    </style>
  </head>
  <body>
    <!-- Put the HTML template code here -->
    <div id="app">
        <Parent/>
      </div>
    <script src="https://unpkg.com/vue"></script>
    <script src="https://unpkg.com/vuex"></script>

    <script>
      const store = new Vuex.Store({
        // state lưu tất cả giá trị của các component
        state: {
            score: 0
        },
        // getters 
        getters: {
            score(state) {
              return state.score
            }
        },
        // chứa các hàm, duy nhất mutations mới thay đổi đc state
        mutations: {
            increment (state, step) {
                state.score += step
            },
            tang (state, number) {
             // state.score = state.score + number
             state.score += number
            }
        },
        // mỗi function trong actions có 2 tham số:
        // {commit} và thông số truyền vào thứ 2
        actions: {
            tang : ({commit}, delay) => {
              setTimeout(() => {
                commit('tang', 4)
              }, delay)
            }
        }
        })
// Nếu dùng button hoặc sự kiện ở methods (của component) 
// để sử dụng function trong mutations,
// người ta gọi là tác động trực tiếp đến state
// Nếu chạy function đó trong actions, gọi là tác động gián tiếp
// Để chạy function của actions trong methods (của component)
// thì sử dụng dispatch
        Vue.component('ChildB',{
        template:`
            <div class="child childB">
            <h1> Score: {{ score }} </h1>
            <button @click="changeTang">Change Tang</button>
            </div>`,
        computed: {
            score () {
            return this.$store.state.score
            }
        },
        methods: {
          changeTang ( ){
            this.$store.commit('tang', 3)
          }
        },
        })

        Vue.component('ChildA',{
        template:`
            <div class="child childA">
            <h1> Score: {{ score }} </h1>
            <button @click="changeTangMethod">Change Tang</button>
            </div>`,
        computed: {
            score () {
            return this.$store.state.score
            }
        },
        methods: {
          changeTangMethod(){
            this.$store.dispatch('tang', 300)
          }
        }
        })

        Vue.component('Parent',{
        template:`
            <div id="parent">
            <childA/>
            <childB/>
            <h1> Score: {{ score }} </h1>
            
            </div>`,
        computed: {
            score () {
            return this.$store.getters.score
            }
        }
        })

        new Vue ({
        el: '#app',
        store
        })
    </script>
  </body>
</html>
