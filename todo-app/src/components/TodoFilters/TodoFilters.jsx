import { FilterButton, FilterButtonContainer, FilterContainer, ItemsLeft } from "./TodoFilters-components"

const TodoFilters = () => {
    return (
        <FilterContainer>
            <ItemsLeft></ItemsLeft>
            <FilterButtonContainer>
                <FilterButton action={()=>{}} active="all" filter="All"/>
                <FilterButton action={()=>{}} active="all" filter="Active"/>
                <FilterButton action={()=>{}} active="all" filter="Completed"/>
            </FilterButtonContainer>
            <button className="text-gray-400 hover:text-white cursor-pointer transition-all duration-300 ease-in">
                Clear Completed
            </button>
        </FilterContainer>
    )

}

export {TodoFilters}