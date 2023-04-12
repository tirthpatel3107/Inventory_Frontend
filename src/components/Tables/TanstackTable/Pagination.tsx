import React from "react";
import "./Table.scss";

const Pagination = ({ allData, table }: any) => {
  return (
    <React.Fragment>
      {allData !== 0 && (
        <>
          <div className="paginationParent paginationWrapper">
            <div className="paginationmain Main">
              <select
                value={table.getState().pagination.pageSize}
                onChange={(e) => {
                  table.setPageSize(Number(e.target.value));
                }}
                className="showPerPage"
              >
                {[10, 20, 50, 100].map((pageSize: any, index: any) => (
                  <option key={index} value={pageSize}>
                    Show {pageSize}
                  </option>
                ))}
              </select>

              <span className="gotoPagee">
                Go to page :
                <input
                  type="number"
                  defaultValue={table.getState().pagination.pageIndex + 1}
                  onChange={(e) => {
                    const page = e.target.value
                      ? Number(e.target.value) - 1
                      : 0;
                    table.setPageIndex(page);
                  }}
                  className="goToPage"
                />
              </span>

              <span className="pageOfpage">
                <div className="cursorDefault">
                  Page
                  <strong className="page1of1">
                    {allData === 0
                      ? "0"
                      : table.getState().pagination.pageIndex + 1}{" "}
                    of {table.getPageCount()}
                  </strong>
                </div>
              </span>

              <div className="arrowsParent">
                <button
                  className="paginationArrow"
                  onClick={() => table.setPageIndex(0)}
                  disabled={!table.getCanPreviousPage()}
                >
                  {"<<"}
                </button>
                <button
                  className="paginationArrow"
                  onClick={() => table.previousPage()}
                  disabled={!table.getCanPreviousPage()}
                >
                  {"<"}
                </button>
                <button
                  className="paginationArrow"
                  onClick={() => table.nextPage()}
                  disabled={!table.getCanNextPage()}
                >
                  {">"}
                </button>
                <button
                  className="paginationArrow"
                  onClick={() => table.setPageIndex(table.getPageCount() - 1)}
                  disabled={!table.getCanNextPage()}
                >
                  {">>"}
                </button>
              </div>
            </div>
          </div>
        </>
      )}
    </React.Fragment>
  );
};

export default Pagination;
