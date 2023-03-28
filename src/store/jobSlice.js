import { createSlice } from "@reduxjs/toolkit";

const job = createSlice({
	name: "job",
	initialState: {
		list: [],
	},
	reducers: {
		addJob: (state, action) => {
			// Không cần clone data ở đây
			// Redux Toolkit có sử dụng ImmerJS nên nó đã tự động clone ở dưới Core
			// Ta không cần làm việc đó nữa, mà có thể thay đổi trực tiếp data

			// const newList = [...state.list]; // or state.list.slice()
			// newList.push(action.payload);
			state.list.push(action.payload);

			// Không cần return data ở đây
		},
		deleteJob: (state, action) => {
			// ...
		}
		// other aciton ...
	},
});

const { reducer, actions } = job;
export const { addJob } = actions;
export default reducer;
