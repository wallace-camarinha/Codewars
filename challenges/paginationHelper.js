/**
For this exercise you will be strengthening your page-fu mastery. You will complete the PaginationHelper class, which is a utility class helpful for querying paging information related to an array.

The class is designed to take in an array of values and an integer indicating how many items will be allowed per each page. The types of values contained within the collection/array are not relevant.

The following are some examples of how this class is used:

  var helper = new PaginationHelper(['a','b','c','d','e','f'], 4);
  helper.pageCount(); //should == 2
  helper.itemCount(); //should == 6
  helper.pageItemCount(0); //should == 4
  helper.pageItemCount(1); // last page - should == 2
  helper.pageItemCount(2); // should == -1 since the page is invalid

  // pageIndex takes an item index and returns the page that it belongs on
  helper.pageIndex(5); //should == 1 (zero based index)
  helper.pageIndex(2); //should == 0
  helper.pageIndex(20); //should == -1
  helper.pageIndex(-10); //should == -1

 */



class PaginationHelper {

  constructor(collection, numPerPage) {
    this.collection = collection;
    this.numPerPage = numPerPage;
  }

  pageCount() {
    const pages = Math.ceil(this.collection.length / this.numPerPage);
    return pages
  }

  itemCount() {
    const items = this.collection.length
    return items
  }

  pageItemCount(currentPage) {
    const trimStart = (currentPage) * this.numPerPage;
    const trimEnd = trimStart + this.numPerPage;

    const pageItems = this.collection.slice(trimStart, trimEnd);

    return pageItems.length ? pageItems.length : -1

  }

  pageIndex(itemIndex) {
    const pages = this.pageCount()
    const pageIndex = Math.ceil((itemIndex + 1) / this.numPerPage) - 1
    
    if(pageIndex >= pages || pageIndex < 0) {
      return -1
    }

    return pageIndex
  }
}


const helper = new PaginationHelper(['a','b','c','d','e','f'], 4);


// All tests passed