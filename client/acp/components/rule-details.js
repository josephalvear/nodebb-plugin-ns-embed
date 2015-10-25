/**
 * Created by Nicolas on 10/21/15.
 */
import Actions from '../actions';
import classNames from 'classnames';
import FormActions from './form-actions';
import React from 'react';
import Rule from '../models/rule';
import RuleForm from './rule-form';

export default class RuleDetails extends React.Component {
    constructor(props) {
        super(props);
    }

    actionDelete() {

    }

    actionSave() {

    }

    fieldDidChange(field, value) {

    }

    getName(rule) {
        return 'Rule: ' + rule.displayName;
    }

    render() {
        return (
            <div className="panel panel-default">
                <div className="panel-heading">{this.getName(this.props.rule)}</div>
                <div className="panel-body">

                    <RuleForm
                        name={this.props.rule.name}
                        displayName={this.props.rule.displayName}
                        regex={this.props.rule.regex}
                        replacement={this.props.rule.replacement}
                        propDidChange={this.fieldDidChange.bind(this)}/>

                    <FormActions
                        okButton="Save"
                        okButtonClick={this.actionSave}
                        okValid={true}
                        dangerButton="Delete"
                        dangerButtonClick={this.actionDelete}
                        dangerValid={true}/>

                </div>
            </div>
        );
    }
}

RuleDetails.propTypes = {
    rule: React.PropTypes.object
};