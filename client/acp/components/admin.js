/**
 * Created by Nicolas on 10/21/15.
 */
import Actions from '../actions';
import connectToStores from 'alt/utils/connectToStores';
import objectAssign from 'object-assign';
import React from 'react';
import Rule from '../models/rule';
import RuleCreate from './rule-create';
import RuleDetails from './rule-details';
import RulesList from './rules-list';
import RulesStore from '../stores/rules-store';

class Admin extends React.Component {
    static getStores() {
        return [RulesStore];
    }

    static getPropsFromStores() {
        return objectAssign({}, RulesStore.getState());
    }

    constructor(props) {
        super(props);
    }

    componentDidMount() {
        Actions.getAllRules();
    }

    render() {
        let extendedView;

        if (this.props.selectedRule) {
            if (this.props.selectedRule.name === Rule.CREATE) {
                extendedView = <RuleCreate />;
            } else {
                extendedView = (
                    <RuleDetails
                        rule={this.props.selectedRule}/>
                );
            }
        }

        return (
            <div className="row">
                <div className="col-md-6">
                    <RulesList
                        rules={this.props.rules}
                        selected={this.props.selectedRule}/>
                </div>
                <div className="col-md-6">
                    {extendedView}
                </div>
            </div>
        );
    }
}

export default connectToStores(Admin);