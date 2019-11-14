import React, { ReactElement } from "react";
import './Recommendation.css'
import { Recommendation } from "../../domain/Recommendation/Recommendation";
import { TableContainer } from "../table_container/TableContainer";
import { Property } from "../../domain/Recommendation/Property";

interface RecommendationProps {
    recommendation:Recommendation
}

interface RecommendationState {
    isWide:boolean
}

export class RecommendationItem extends React.Component<RecommendationProps,RecommendationState> {

    /**
     *
     */
    constructor(props:RecommendationProps) {
        super(props);
        this.state = {
            isWide:false
        }
    }

    public renderProperties(properties: Property[], renderFlag:boolean = true) {
        if (properties.length > 0 && renderFlag)
            return (<TableContainer rows={properties} type={Property} />)
        else
            return (<div></div>)
    }
    
    public render(): ReactElement {
        return (
        <div className={"recommendation_box" + (this.state.isWide?" long":"")} onClick={(e) => {this.setState({isWide:!this.state.isWide})}}>
            <div className="recommendation_table" >
                <p className="recommendation_title">{this.props.recommendation.name}</p>

                {this.renderProperties(this.props.recommendation.standardProperties, this.state.isWide)}

            </div>

            <div className="recommendation_table positive">
                {this.renderProperties(this.props.recommendation.positiveProperties)}
            </div>
            <div className="recommendation_table negative">
                {this.renderProperties(this.props.recommendation.negativeProperties)}
            </div>
        </div>)
    }
}