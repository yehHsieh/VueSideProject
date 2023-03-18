import { defineStore } from "pinia";
import axios from 'axios'
const { VITE_APP_URL, VITE_APP_PATH } = import.meta.env;


const favoritesStore = defineStore("favorites", {
    state: () => {
        return {
            tempProducts: [],
            favoriteItems: [],
            filled: [],
            empty: [],
            index: 0,
        }
    },
    actions: {
        getProducts1(page = 1) {
            this.isLoading = true;
            axios.get(`${VITE_APP_URL}v2/api/${VITE_APP_PATH}/products/?page=${page}`)
                .then((res) => {
                    this.tempProducts = res.data.products;
                    this.pagination = res.data.pagination;
                    this.isLoading = false
                    this.filled=[]
                    this.empty=[]
                        this.tempProducts.forEach(i=>{
                            this.filled[this.index]=false
                            this.empty[this.index]=true
                            this.index+=1;
                        })
                })
        },
        addFavorite(inde) {
            this.filled[inde] = !this.filled[inde];
            this.empty[inde] = !this.empty[inde];
            this.favoriteItems.push(this.tempProducts[inde])
        },
        removeFavorite(inde) {
            this.empty[inde] = !this.empty[inde];
            this.filled[inde] = !this.filled[inde];
            this.favoriteItems = this.favoriteItems.filter(item => item.id !== this.tempProducts[inde].id);
        }
    },
})
export default favoritesStore
