import { Input} from "./../Form/styled";
import { StyledForm } from "./../Form/styled"
import { searchQueryParamName } from './../searchQueryParamName';
import { useQueryParameter, useReplaceQueryParameter } from "./../../queryParameters";

export const Search = () => {
    const query = useQueryParameter(searchQueryParamName);
    const replaceQueryParameter = useReplaceQueryParameter();

    const onInputChange = ({ target }) => {
        replaceQueryParameter({
            key: searchQueryParamName,
            value: target.value.trim() !== "" ? target.value : undefined,
        });
    };

    return (
        <StyledForm>
            <Input
                placeholder="Filtruj zadania"
                value={query || ""}
                onChange={onInputChange}
            />
        </StyledForm>
    );
};