import React from "react";
import Input,  { InputLabel } from "material-ui/Input";
import { FormControl, FormHelperText } from 'material-ui/Form';

const NinesqInputField = props => <FormControl fullWidth={props.fullWidth}>
  <InputLabel htmlFor={props.id}>{props.label}</InputLabel>
    <Input
      {...props}
      value={props.input.value}
      onChange={props.input.onChange}
    />
    {props.meta.touched &&
      ((props.meta.error && <FormHelperText>{props.meta.error}</FormHelperText>) ||
      (props.meta.warning && <FormHelperText>{props.meta.error}</FormHelperText>))}
</FormControl>

NinesqInputField.propTypes = {
  // classes: PropTypes.object.isRequired,
  // name: PropTypes.string.isRequired,
  // label: PropTypes.string.isRequired,
}

export default NinesqInputField
