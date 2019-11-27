import React, { ReactElement } from "react";
import { connect } from "react-redux";
import { thunkGetRecommendation } from "../../redux/message/thunk";
import { forwardPagination, backwardPagination, setProductsPerPage } from "../../redux/message/action";
import './RecommendationGrid.css'
import { ChatState } from "../../redux/message/types";
import { AppState } from "../../redux";
import { Recommendation } from "../../domain/Recommendation/Recommendation";
import { TableContainer } from "../table_container/TableContainer";
import { Property } from "../../domain/Recommendation/Property";
import { RecommendationItem } from "./Recommendation";

interface RecommendationGridProps {
    chat: ChatState,
    thunkGetRecommendation: any,
    backwardPagination: typeof backwardPagination,
    forwardPagination: typeof forwardPagination,
    setProductsPerPage: typeof setProductsPerPage
}

class RecommendationGrid extends React.Component<RecommendationGridProps> {

    update: boolean = false

    componentDidMount() {
        this.props.thunkGetRecommendation()
    }

    public renderProperties(properties: Property[], renderFlag:boolean = true) {
        if (properties.length > 0 && renderFlag)
            return (<TableContainer rows={properties} type={Property} />)
        else
            return (<div></div>)
    }

    componentDidUpdate() {
        if (this.update) {
            this.props.thunkGetRecommendation()
            this.update = false
        }
    }

    componentWillUpdate(nextProps: RecommendationGridProps) {
        this.update = this.props.chat.productsPerPage !== nextProps.chat.productsPerPage || this.props.chat.pagination !== nextProps.chat.pagination
    }

    public render(): ReactElement {
        return (
            <div className="recommendation_container">
                <div className="recommendation_settings">
                    
                    <div className="products_per_page">
                        <p> Products / page: </p>
                        <input type="number" value={this.props.chat.productsPerPage} onChange={(e) => { this.props.setProductsPerPage(+e.target.value) }} />

                    </div>
                    <div className="pagination">
                        <button onClick={() => { this.props.backwardPagination() }}>
                            <span className="pagination_icon left" />
                        </button>
                        <p>{this.props.chat.pagination} / {this.props.chat.maxPages}</p>
                        <button onClick={() => { this.props.forwardPagination() }} >
                            <span className="pagination_icon right" />
                        </button>
                    </div>
                    <div className="question_flow">
                        {
                            this.props.chat.questionFlow.map((value:string, index:number) => {
                                return (<div key={index} className="flow_tag">{value} </div>)
                            })
                        }
                    </div>
                </div>
                <div className="recommendation_grid">
                    {
                        this.props.chat.recommendations.map((value: Recommendation,index:number) => {
                            return (<RecommendationItem key={index} recommendation={value} />)
                        })
                    }
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state: AppState) => ({
    chat: state.message
});

export default connect(
    mapStateToProps,
    { thunkGetRecommendation, forwardPagination, backwardPagination, setProductsPerPage }
)(RecommendationGrid)