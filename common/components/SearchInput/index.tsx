import useOnClickOutside from "@common/hooks/useOnClickOutside";
import { debounce } from "@common/lib/debounce";
import { gqlFetch } from "@common/lib/gqlFetcher";
import { NavbarSection } from "@modules/Home/interfaces";
import { HomePageData } from "@modules/Home/types";
import classNames from "classnames";
import { GET_SEARCH_ITEMS } from "graphql/queries/search";
import Link from "next/link";
import {
  Fragment,
  FunctionComponent,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import classes from "./SearchInput.module.scss";
import { Props } from "./types";

const SearchInput: FunctionComponent<Props> = (props) => {
  const {
    customClass,
    customWrapperClass,
    debounceTimeout = 500,
    ...rest
  } = props;
  const [query, setQuery] = useState("");
  const [results, setResults] = useState<NavbarSection["items"]>([]);
  const [showResults, setShowResults] = useState(false);
  const dropdownRef = useRef(null);

  const closeResultsDropDown = () => setShowResults(false);

  useOnClickOutside(dropdownRef, closeResultsDropDown);

  // Debouncing API calls and memoizing search results
  const handleOnSearch = useMemo(() => {
    const getSearchResults = () => {
      gqlFetch(GET_SEARCH_ITEMS, {
        query,
      }).then((data: HomePageData) => {
        const { navbarSection } = data;
        setResults(navbarSection?.items!);
      });
    };

    return debounce(getSearchResults, debounceTimeout);
  }, [debounceTimeout, query]);

  useEffect(() => {
    handleOnSearch();
  }, [handleOnSearch, query]);

  return (
    <div className={classNames(classes.searchWrapper, customWrapperClass)}>
      <div className="relative" onBlur={() => setShowResults(false)}>
        <input
          className={classNames(classes.searchInputContainer, customClass)}
          onChange={(e) => setQuery(e.target.value)}
          onFocus={() => setShowResults(true)}
          {...rest}
        />
        {showResults && (
          <div
            ref={dropdownRef}
            className="absolute flex-col flex mt-1 w-full p-2 bg-white shadow-lg rounded-[8px] max-h-56 overflow-y-auto text-sm"
            data-cy="search-dropdown"
          >
            {!!results.length ? (
              <Fragment>
                {results.map((item) => {
                  return (
                    <Link
                      key={item.id}
                      className="cursor-pointer hover:bg-black hover:bg-opacity-10 p-2 rounded-[6px]"
                      href={item.outLink}
                      target="_blank"
                    >
                      {item.name}
                    </Link>
                  );
                })}
              </Fragment>
            ) : (
              <div>No Results</div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default SearchInput;
