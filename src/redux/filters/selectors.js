import { createSelector } from "@reduxjs/toolkit";
import { selectContacts } from "../contacts/selectors";

export const selectFilter = (state) => state.filters.name;

export const selectResultsFilters = createSelector(
  [selectContacts, selectFilter],
  (items, filterName) => {
    return items.filter(({ name }) => name.toLowerCase().includes(filterName));
  }
);